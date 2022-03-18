import React, { useRef, useState } from 'react';
import colors from '../../constants/colors';
import Colors from '../../constants/colors';
import Icon from '../general/Icon';
import Text from '../general/Text';
import Button from './Button';
import DragIndicator from './DragIndicator';
import ResizeIndicator from './ResizeIndicator';

export interface WindowProps {
    closeWindow: () => void;
    width: number;
    height: number;
    top: number;
    left: number;
}

const Window: React.FC<WindowProps> = (props) => {
    const windowRef = useRef<any>(null);
    const dragRef = useRef<any>(null);

    const dragProps = useRef<{
        dragStartX: any;
        dragStartY: any;
    }>();

    const resizeRef = useRef<any>(null);

    const [top, setTop] = useState(props.top);
    const [left, setLeft] = useState(props.left);

    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);

    const [isMaximized, setIsMaximized] = useState(false);
    const [preMaxSize, setPreMaxSize] = useState({
        width,
        height,
        top,
        left,
    });

    const startResize = (event: any) => {
        event.preventDefault();
        window.addEventListener('mousemove', onResize, false);
        window.addEventListener('mouseup', stopResize, false);
    };

    const onResize = ({ clientX, clientY }: any) => {
        const curWidth = clientX - left;
        const curHeight = clientY - top;
        if (curWidth > 520) resizeRef.current.style.width = `${curWidth}px`;
        if (curHeight > 220) resizeRef.current.style.height = `${curHeight}px`;
        resizeRef.current.style.opacity = 1;
    };

    const stopResize = () => {
        setWidth(resizeRef.current.style.width);
        setHeight(resizeRef.current.style.height);
        resizeRef.current.style.opacity = 0;
        window.removeEventListener('mousemove', onResize, false);
        window.removeEventListener('mouseup', stopResize, false);
    };

    const startDrag = (event: any) => {
        const { clientX, clientY } = event;
        event.preventDefault();
        dragProps.current = {
            dragStartX: clientX,
            dragStartY: clientY,
        };
        window.addEventListener('mousemove', onDrag, false);
        window.addEventListener('mouseup', stopDrag, false);
    };

    const onDrag = ({ clientX, clientY }: any) => {
        let { x, y } = getXYFromDragProps(clientX, clientY);
        dragRef.current.style.transform = `translate(${x}px, ${y}px)`;
        dragRef.current.style.opacity = 1;
    };

    const stopDrag = ({ clientX, clientY }: any) => {
        dragRef.current.style.opacity = 0;
        const { x, y } = getXYFromDragProps(clientX, clientY);
        setTop(y);
        setLeft(x);
        window.removeEventListener('mousemove', onDrag, false);
        window.removeEventListener('mouseup', stopDrag, false);
    };

    const getXYFromDragProps = (
        clientX: number,
        clientY: number
    ): { x: number; y: number } => {
        if (!dragProps.current) return { x: 0, y: 0 };
        const { dragStartX, dragStartY } = dragProps.current;

        const x = clientX - dragStartX + left;
        const y = clientY - dragStartY + top;

        return { x, y };
    };

    const maximize = () => {
        if (isMaximized) {
            setWidth(preMaxSize.width);
            setHeight(preMaxSize.height);
            setTop(preMaxSize.top);
            setLeft(preMaxSize.left);
            setIsMaximized(false);
        } else {
            setPreMaxSize({
                width,
                height,
                top,
                left,
            });
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setTop(0);
            setLeft(0);
            setIsMaximized(true);
        }
    };

    return (
        <div style={styles.container}>
            <div
                style={Object.assign({}, styles.window, {
                    width,
                    height,
                    top,
                    left,
                })}
                ref={windowRef}
            >
                <div style={styles.windowBorderOuter}>
                    <div style={styles.windowBorderInner}>
                        <div style={styles.topBar}>
                            <div
                                onMouseDown={startDrag}
                                style={styles.windowHeader}
                            >
                                <Text white noSelect>
                                    Showcase Explorer
                                </Text>
                            </div>
                            <div style={styles.windowTopButtons}>
                                <Button icon="minimize" />
                                <Button icon="maximize" onClick={maximize} />
                                <div style={{ paddingLeft: 2 }}>
                                    <Button
                                        icon="close"
                                        onClick={props.closeWindow}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={styles.contentOuter}>
                            <div style={styles.contentInner}>
                                <div style={styles.content}>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                        <div style={styles.bottomBar}>
                            <div
                                style={Object.assign({}, styles.insetBorder, {
                                    flex: 5 / 7,
                                })}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomSpacer
                                )}
                            />
                            <div
                                style={Object.assign(
                                    {},
                                    styles.insetBorder,
                                    styles.bottomResizeContainer
                                )}
                            >
                                <div
                                    onMouseDown={startResize}
                                    style={styles.resizeArea}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Icon size={12} icon="windowResize" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DragIndicator width={width} height={height} dragRef={dragRef} />
            <ResizeIndicator
                top={top}
                left={left}
                width={width}
                height={height}
                resizeRef={resizeRef}
            />
        </div>
    );
};

const styles: StyleSheetCSS = {
    window: {
        backgroundColor: Colors.lightGray,
        position: 'absolute',
        display: 'flex',
    },
    windowBorderOuter: {
        border: `1px solid ${Colors.black}`,
        borderTopColor: colors.lightGray,
        borderLeftColor: colors.lightGray,
        flex: 1,
        display: 'flex',
    },
    windowBorderInner: {
        border: `1px solid ${Colors.darkGray}`,
        borderTopColor: colors.white,
        borderLeftColor: colors.white,
        flex: 1,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
    },
    resizeArea: {
        right: -16,
        bottom: -16,
        width: 64,
        height: 64,
        position: 'absolute',
        cursor: 'nwse-resize',
    },
    topBar: {
        backgroundColor: Colors.blue,
        width: '100%',
        height: 20,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 2,
        cursor: 'move',
        boxSizing: 'border-box',
    },
    contentOuter: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: colors.darkGray,
        borderLeftColor: colors.darkGray,
        flexGrow: 1,
        display: 'flex',
        marginTop: 8,
        marginBottom: 8,
    },
    contentInner: {
        border: `1px solid ${Colors.lightGray}`,
        borderTopColor: colors.black,
        borderLeftColor: colors.black,
        flex: 1,
        display: 'flex',
    },
    content: {
        flex: 1,
        display: 'flex',
        position: 'relative',
        backgroundColor: Colors.white,
    },
    bottomBar: {
        flexShrink: 1,
        width: '100%',
        height: 16,
        display: 'flex',
    },
    bottomSpacer: {
        width: 16,
        marginLeft: 2,
    },
    insetBorder: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: colors.darkGray,
        borderLeftColor: colors.darkGray,
        padding: 2,
    },
    bottomResizeContainer: {
        flex: 2 / 7,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        marginLeft: 2,
    },
    windowTopButtons: {
        display: 'flex',
        alignItems: 'center',
    },
    windowHeader: {
        flex: 1,
    },
};

export default Window;