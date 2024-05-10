import { useState } from "react";
import Display from "./Display";
const Input = () =>{
   
    const data =[
       { id : 1,
        para :"Artificial intelligence (AI) is revolutionizing industries, from healthcare to finance. Machine learning algorithms analyze vast amounts of data to make predictions and decisions faster and more accurately than humans. As AI becomes more sophisticated, it's transforming how we work, learn, and interact with technology."
       },
       {
        id : 2,
        para: "The internet has connected the world like never before, enabling instant communication and collaboration across continents. Social media platforms keep us connected with friends and family, while video conferencing tools revolutionize remote work and learning. As 5G networks roll out, the promise of even faster, more reliable connectivity looms large."
       },
       {
        id: 3,
        para : "With the proliferation of technology comes concerns about privacy and data security. From social media data breaches to controversial surveillance practices, the digital age has raised questions about who has access to our personal information and how it's being used. Balancing innovation with privacy rights remains a key challenge for tech companies and policymakers alike."
       },
       {
        id : 4,
        para : "As concerns about climate change grow, so does the demand for sustainable technology solutions. Renewable energy sources like solar and wind power are becoming more efficient and affordable, while electric vehicles are poised to replace traditional gas-powered cars. Tech companies are also innovating in areas like recycling and waste reduction to minimize their environmental impact."
       },
       {
        id : 5,
        para : "While technology has the potential to improve lives, the digital divide threatens to widen existing inequalities. Access to reliable internet and affordable devices remains a challenge for many, particularly in rural and low-income areas. Bridging this gap is crucial for ensuring equal opportunities in education, employment, and healthcare."

       },
       {
        id : 6,
        para : "As technology becomes increasingly integrated into our daily lives, ethical considerations become more complex. Questions about algorithmic bias, autonomous weapons, and the impact of automation on jobs require careful deliberation and regulation. Ensuring that technology is developed and used ethically is essential for creating a more just and equitable society."
       },
       {
        id : 7,
        para : "As technology advances, so do cybersecurity threats. Cyberattacks targeting individuals, businesses, and governments are on the rise, highlighting the importance of robust cybersecurity measures. From ransomware attacks to data breaches, the stakes are high for protecting sensitive information and critical infrastructure. Constant vigilance and investment in cybersecurity defenses are essential to stay ahead of evolving threats."
       },
       {
        id : 8,
        para : "Technology is transforming education, making learning more interactive, personalized, and accessible. Online learning platforms offer courses on virtually any subject, allowing learners to study at their own pace from anywhere in the world. Augmented reality (AR) and virtual reality (VR) applications enhance the classroom experience, bringing lessons to life and fostering deeper engagement. Additionally, adaptive learning algorithms tailor educational content to individual student needs, improving learning outcomes."
       },
       {
        id : 9,
        para : "Advancements in automation, robotics, and artificial intelligence are reshaping the workforce. While these technologies offer opportunities for increased efficiency and productivity, they also raise concerns about job displacement and the future of work. As certain tasks become automated, there's a growing emphasis on developing skills that are uniquely human, such as creativity, critical thinking, and emotional intelligence. Adapting to the changing nature of work will be essential for navigating the Fourth Industrial Revolution."
       },
       {
        id : 10,
        para : "The space industry is experiencing a renaissance, driven by a mix of government initiatives and private sector innovation. Companies like SpaceX, Blue Origin, and Virgin Galactic are pioneering new technologies and business models to make space exploration and commercialization more accessible. From satellite constellations providing global internet coverage to plans for lunar and Martian colonization, the possibilities for space exploration are expanding rapidly."
       }
    ]
    const [content, setNewContent] = useState(data);
    const [number , setNewNumber] = useState("");

       function generateThePara(){
           if(number === 0){
            return;
           }
           else{
            newObj = {
                id,
                para,
            }
           }

           setNewContent([...content,newObj]);
           setNewNumber("");
       } 
       

    

    
    return(
        <div>
            <section><p className=" text-3xl font-extrabold font-sans  ">Tired of Boring Lorem Ipsums ?</p></section>
            <div className="flex justify-center items-center gap-4 m-4">
            <section><input value={number} type="number" placeholder="Enter the number" className="outline-none border-4 border-white p-1  bg-gradient-to-r from-blue-500 placeholder-black" onChange={(e)=>setNewNumber(e.target.value)}></input></section>
            <section><button className="p-1 w-20 font-bold bg-gradient-to-r from-blue-500 border-white border-4  " onClick={generateThePara}>ADD</button></section>
            </div>

            <section>
               {content.map((task, index)=>{
                if(index < number){
                    return  <Display key="index" id={task.id} para={task.para}/>
                }
               })}
            </section>
            
        </div>
    )
}

export default Input;