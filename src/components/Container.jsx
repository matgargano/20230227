const Container = ({children, color}) => {
    return (
        <div className={`bg-${color} min-h-screen`}>
            <div 
                className="min-h-screen container mx-auto bg-white">
                {children}
            </div>
        </div>
    );
}

Container.defaultProps = {
    color: 'orange-500'
}

export default Container;