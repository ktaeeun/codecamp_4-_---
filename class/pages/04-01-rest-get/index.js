import axios from "axios"


export default function RestApiRequest (){

    async function Click (){
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
        
    }

    return (
        <button onClick={Click}>REST-API 요청하기</button>
    )
}