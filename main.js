const text=[
    `Atoms of radioactive elements can split. According to Albert Einstein, mass and energy 
    are interchangeable under certain circumstances. When atoms split, the process is called nuclear 
    fission. In this case, a small amount of mass is converted into energy. Thus the energy released 
    cannot do much damage. However, several subatomic particles called neutrons are also emitted during 
    this process. Each neutron will hit a radioactive element releasing more neutrons in the process. 
    This causes a chain reaction and creates a large amount of energy. This energy is converted into 
    heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They 
    generate energy that can cause explosions.`,

    `Since March 8, 1990, Women’s Day has been observed by SAARC (South Asian Association for Regional 
    Cooperation) comprising seven countries namely India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka 
    and Maldives. The day is celebrated to highlight the problems of the girl child in these countries. 
    It is very sad that girl children are subjected to extreme neglect and disrespect, especially in 
    underdeveloped countries. The birth of a girl child is seen by parents as a cause of pity. They are deprived 
    of proper nutrition,  education, economic opportunities and social status or respect. We must eliminate these 
    prejudices and provide a bright future for girls by educating them.`,

    `Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals. The pulp can be made mechanically through grinders or through chemical processes. Short fibres are produced by mechanical grinding. The paper produced in this way is weak and is used to make newspapers, magazines and phonebooks.`,

    `Gardening is my favourite hobby. I own a small plot of land next to our house. I cultivate gardening there. Every day, I spend half an hour gardening. After returning from my morning walk, I go to my garden with a spade and a bucket of water. I prepare the soil, prune the plants, and water them. I also use insecticides and fertilisers. My heart leaps with joy when I see the plants swaying in the wind. I feel heavenly pleasure as I watch them grow day by day.`,

    `Home is the place where we return to rest after a day’s work, and where parents and children meet together and have a carefree and joyful time. Our family consists of three members—father, mother, and brother. We live in a rural area. It is free from the hustle and bustle of city life. It is especially famous for its scenic beauty. I am the most important member of the family. Everyone trusts my judgement and agrees to follow my suggestions.`,

    `The Dowry system is bad in society. It has turned the sacred matter of marriage into a business deal. The bride is regarded as a marketable commodity. Bride’s parents are often put under inhumane pressure for a handsome dowry. Sometimes they become destitute to give their daughters in marriage. In many cases, young brides are brutally tortured or pushed to commit suicide. To eliminate this social evil, a complete change in society’s outlook is necessary. Women should be treated as equal partners to men.`,

    `Training in a specific branch of applied science, such as engineering, agriculture, weaving, spinning, etc., is considered technical education. It contrasts with liberal education which aims to impart general knowledge of arts and sciences. In the modern era, technical education is extremely important. Today, a country’s prosperity is determined by its industrial development. The more advanced the country is in industry, the more prosperous the country is. Technical knowledge is now the backbone of industrial progress, which holds the key to national prosperity.`,

    `After summer comes the rainy season. It lasts from mid-June to the end of September. During this time of year, the sky is cloudy. It drizzles and rains cats and dogs sometimes. Rains provide relief from the oppressive summer heat. Green leaves are developed by the tree. Ponds and rivers are full of water. Monsoon is a boon for farmers. Rainwater softens the soil and makes it suitable for cultivation. Monsoon has some disadvantages. Due to heavy and incessant rainfall, the roads, especially in villages, become muddy.`,

    `People love to daydream. I am no exception to this universal affection of people. I often daydream that I won the first prize in the lottery and became a millionaire. Now, if I win the lottery for five lakh rupees, I will spend two lakh rupees on my personal comforts and luxuries. I plan to demolish my father’s straw house and replace it with a two-story paved structure.`,

    `People live in society. Hence we cannot identify with those who live near us and work with us. This acquaintance sometimes turns into friendship. You will not find friendless people. Even monks have friends. I also have friends. Peter is my close friend. He is my friend since childhood. He comes from a poor family. But he is very talented. My next best friend is Lisa. She is a complete foil to Peter. She is the son of a big man. She is neither intelligent nor industrious. She often goes out hunting birds with a gun. I have some other friends. They are John, Nisha and Camellia.`,

    `Television is a wonderful  scientific gift. It combines the advantages of cinema and radio. The most important and effective form of entertainment is television. It broadcasts live telecasts of major events. It is also the most effective advertising medium. It facilitates mass education. It is very important in the world of sports and games. However, it has some drawbacks. It is used to enhance the image of specific individuals. Some programmes are inappropriate for pupils to watch. There is a danger of becoming addicted to television. As a result, academic performance suffers. It also has an impact on vision. As a result, programmes must be carefully chosen.`,

    `Education for a vocation (profession) is known as vocational education. Some of its forms include computer applications, engineering, medicine, agriculture, business management, chartered accountancy, costing, etc. From the perspective of India’s economic progress, it is very important. Moreover, the country is undergoing rapid industrialization. Business is expanding. Vocationally trained personnel, especially in computer applications, are required to run various industrial units, business establishments and trade centres.`,



];

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
const item=document.querySelector("#items")
const dataContainer = document.querySelector("#data")
const generate = () =>{
    if(isNaN(item.value || item.value < 0) || item.value >12){
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = ` <p> ${text[randomIndex]} </p>`
    }else{
        const localText = shuffle(text);
        const data = localText.slice(0, item.value)
        const paragraphs = data.map(
            (d)=>{
                return`<p> ${d}</p>`
            }
        )
        console.log(paragraphs)
        console.log(paragraphs.join(""))
        dataContainer.innerHTML = paragraphs.join("");
        // array to sting
    }

}