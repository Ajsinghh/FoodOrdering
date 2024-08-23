const Contact = ()=>{
    return(
        <div className="contact">
            <h2>This is contact page</h2>
            <form className="mt-4 flex gap-5">
                <input type="text" placeholder="Name" className="border"/>
                <input type="text" placeholder="Message" className="border"/>
                <button className="border p-1 bg-slate-200 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact