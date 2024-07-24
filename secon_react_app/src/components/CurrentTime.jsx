let CurrentTime = ()=>{
    let time = new Date()
    return <p>This is the current time : {time.toLocaleDateString()} 
    <br></br>
    {time.toLocaleTimeString()}
    </p>
    };
    
    export default CurrentTime;