interface StatusBarProps {
    status: string
}

export const StatusBar = (props: StatusBarProps) => {
    const { status } = props;
    return (
        <div>
            {status}
        </div>
    );
};