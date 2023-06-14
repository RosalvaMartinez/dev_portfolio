// import linkedInLogo from '/linkedInLogo.png'
// import githubLogo from '/githubLogo.png'




function Navigation() {
    // const [menuToggle, setMenuToggle] = useState(false)


    // const navLinks = [
    //     {
    //         path: "/about",
    //         title: "About Me"
    //     },
    //     {
    //         path: "/github",
    //         title: "Git Hub"
    //     },
    //     {
    //         path: "/linkedIn",
    //         title: "LinkedIn"
    //     },
    //     {
    //         path: "/resume",
    //         title: "My Resume"
    //     }
    // ]


    return (
        <nav>
             <ul className="flex flex-row p-6">
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <a href="/">Home</a>
                 </button>
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <li className="mx-2"><a href="/about">About Me</a></li>
                 </button>
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <li className="mx-2"><a href="https://github.com/RosalvaMartinez">Github</a></li>
                 </button>
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <li className="mx-2"><a href="https://www.linkedin.com/in/rosalva-hazel-martinez-a65bb9276/">Linked In</a></li>
                 </button>
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <li className="mx-2"><a href="https://www.dropbox.com/scl/fi/wp6nq1cark0epjl0eu0kv/Rosalva_Hazel_Martinez_Resume.pdf?dl=0&rlkey=66x8ci3vojkrwcsz3yfvnh6se">My Resume</a></li>
                 </button>
                 <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                     <li className="mx-2"><a href="https://www.dropbox.com/scl/fi/ecslt4nlodv2dfnje6q99/__martinez1.pdf?dl=0&rlkey=375em0xy41fufnifouy8lazxy">Certifications</a></li>
                 </button>
             </ul>
         </nav>
    )


        // <nav>
        //     <ul className="sm:flex hidden flex-row p-6">
        //             navLinks.map((item) => {
        //                 return (
        //                     <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 rounded-lg text-sm text-slate-100">
        //                         <Link to={item.path}>{item.title}</Link>
        //                     </li>

        //                 )
        //             })
        
               
        //     </ul>
        //     {/* Mobile navbar that only apears when the dog emoji is clicked on */}
        //     <div className={`${menuToggle ? "" : "hidden"} w-64 bg-slate-700 absolute top-[72px] right-0`}>
        //         <ul className="flex flex-col h-3/4">
        //             navLinks.map((item) => {
        //                     return (
        //                         <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 my-2 rounded-lg text-sm text-center text-slate-100">
        //                             <Link to={item.path}>{item.title}</Link>
        //                         </li>

        //                     )
        //                 })
        //                 </ul>
        //     </div>
        //     <button onClick={() => { setMenuToggle(!menuToggle)}} className="text-3xl flex sm:hidden">🐶</button>
        // </nav>

        /* // <div className="bg-white">
        //     <a href="https://github.com/RosalvaMartinez" target="_blank">
        //         <img src={githubLogo} className="h-16 w-16" alt="github logo" />
        //     </a>
        //     <a href="https://www.linkedin.com/in/rosalva-hazel-martinez-a65bb9276/" target="_blank">
        //         <img src={linkedInLogo} className="h-16 w-16" alt="linkedIn logo" />
        //     </a>
        // </div> */
}

export default Navigation;
