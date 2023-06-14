function About() {
    return (
        <div className="flex border border-black h-auto bg-gradient-to-r from-gray-900 to-gray-800 transition">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

                <h1 className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Hi there! Welcome to my portfolio! My name is Rosalva Hazel Martinez, and I am a passionate full-stack web developer. With a strong background in web development, I strive to create immersive and user-friendly digital experiences. Let me share a bit about myself and my skills.
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    First and foremost, I have a deep love for both the front-end and back-end aspects of web development. On the front-end side, I specialize in crafting elegant and responsive user interfaces using modern web technologies such as HTML5, CSS3, and JavaScript. I have a keen eye for design, and I enjoy creating visually appealing and intuitive user experiences.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    When it comes to the back-end, I am experienced in working with various programming languages and frameworks. I am proficient in languages like Python and JavaScript, and I am well-versed in frameworks such as Django and Node.js. I am comfortable working with databases, using SQL and NoSQL technologies like MySQL and MongoDB.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    One of my key strengths is my ability to seamlessly integrate front-end and back-end systems. I have a solid understanding of RESTful APIs and have experience building and consuming them to connect different components of a web application. This enables me to develop robust and efficient full-stack solutions.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    In addition to my technical skills, I am a highly collaborative and detail-oriented professional. I believe in the importance of effective communication and teamwork to deliver successful projects. I am comfortable working in agile environments and have experience with version control systems like Git.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Continuous learning is a core principle for me. As a tech enthusiast, I keep myself updated with the latest trends and best practices in web development. I actively seek out opportunities to expand my skill set and explore new technologies.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Outside of work, I enjoy engaging in open-source projects and contributing to the developer community. I find great satisfaction in helping others and sharing knowledge through blogging and participating in tech forums.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Thank you for visiting my portfolio and taking the time to learn about me. If you have any questions or if there's a project you'd like to collaborate on, feel free to reach out. I look forward to connecting with you!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="mailto:rosalvahmartinez@gmail.com?subject=Let's Connect" className="animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-sans text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300  rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                        Let's connect!
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About;