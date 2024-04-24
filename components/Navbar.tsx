export default function Navbar(){
    return(
        <ul className="md:flex">
            <li className="text-2xl p-5 text-indigo-400 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text"><a>About Me</a></li>
            <li className="text-2xl p-5 text-indigo-400 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text"><a>Projects</a></li>
            <li className="text-2xl p-5 text-indigo-400 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text"><a>Blog Posts</a></li>
            <li className="text-2xl p-5 text-indigo-400 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text"><a>Contact Me</a></li>
        </ul>
    );
}