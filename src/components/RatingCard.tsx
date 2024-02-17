import { useState } from "react"
import iconStar from "../assets/icon-star.svg"
import thankYou from "../assets/illustration-thank-you.svg"

export default function RatingCard(){
    const [rating, setRating] = useState<Number>(0)
    const [isHome, setHome] = useState<boolean>(true)

    function rateButton(rate: Number){
        if(rating===rate) return <button onClick={() => setRating(rate)} className="bg-[#7D8998] rounded-full text-white px-6 py-4">{rate.toString()}</button>
        else return <button onClick={() => setRating(rate)} className="bg-[#262F38] rounded-full text-[#9ca2ad] px-6 py-4 hover:bg-[#FC7B18] transition-colors duration-300 hover:text-white">{rate.toString()}</button>
    }

    if(isHome){
        return <section className="bg-[#1E2730] rounded-3xl w-1/4 ">
        <div className="flex items-center justify-center bg-[#262F38] h-12 w-12 rounded-full m-7">
            <img src={iconStar} alt="" />
        </div>
        <div className="m-7">
            <h2 className="text-white font-semibold text-2xl">How did we do?</h2>
        </div>
        <div className="m-7">
            <p className="text-[#9ca2ad] text-pretty font-semibold tex-sm">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</p>
        </div>
        <div className="flex justify-between m-7">
            {rateButton(1)}
            {rateButton(2)}
            {rateButton(3)}
            {rateButton(4)}
            {rateButton(5)}
        </div>
        <div className=" mx-9 mb-7">
            <button onClick={() => setHome(!isHome)} className="text-bold text-white bg-[#FC7B18] rounded-3xl px-32 py-2 hover:bg-[#FFFFFF] hover:text-[#FC7B18] transition-colors duration-300">SUBMIT</button>
        </div>
    </section>
    }
    else{
        return <section className="bg-[#1E2730] rounded-3xl w-1/4" >
            <div className="flex justify-center mt-11">
                <img src={thankYou} alt="" />
            </div>
            <div className="flex justify-center bg-[#262F38] mx-auto mt-6 rounded-full w-48">
                <h2 className="text-[#FC7B18] py-1">{`You Selected ${rating} out of 5`}</h2>
            </div>
            <div className="flex justify-center text-white font-semibold text-2xl mx-7 my-5">Thank You!</div>
            <div>
                <p className="text-[#9ca2ad] mx-7 mb-7 text-center">We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
            </div>
        </section>
    }
}