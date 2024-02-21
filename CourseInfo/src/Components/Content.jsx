import Part from "./Part"

const Content = (props) => {



    return (
        <div>
            <Part part={props.data[0]} />
            <Part part={props.data[1]} />
            <Part part={props.data[2]} />
        </div>

    )
}

export default Content