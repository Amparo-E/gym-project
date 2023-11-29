const tips = ["Don't forget your water bottle", "Bring a towel", "Don't skip the warm up",  "Slow and controled repetitions", "Take a break", "Breath", "Don't push yourself"]

export const CardTips = () => {
    return (
        <article className=" w-[650px] rounded-xl bg-gray-100 bgora"> 
            <h3 className="text-2xl pl-4 py-3 font-medium">Tips for good training</h3>
            <ul className="pl-4">
                {tips.map((tip: string) => (
                    <li className="flex items-center text-lg pb-2">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#EA580C"></path> </g></svg>
                        <span className="pl-2">{tip}</span>
                    </li>
                ))}
            </ul>
        </article>
    )
}