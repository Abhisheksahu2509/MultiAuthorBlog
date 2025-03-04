import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link
                    to= "/" className="self-center whitespace-nowwrap text-lg sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-500 rounded-lg text-white">Multi Auth</span>
                    Blog
                </Link>
                </div>
                <div className="grid grid-col-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title= 'About' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.100jsprojects.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                100 JS Projects
                            </Footer.Link>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Multi Auth Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title= 'Follow us' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://github.com/Divya121-tech'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Github
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title= 'Legal' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'      
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href='#'>
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Multi Auth Blog" year={new Date().getFullYear()}/> 
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='https://www.facebook.com/divya.mark.39' icon ={BsFacebook}/>
                    <Footer.Icon href='https://instagram.com/heydivi_?igshid=NGExMmI2YTkyZg==' icon ={BsInstagram}/>
                    <Footer.Icon href=' https://twitter.com/Divya823198431?t=8hZRYjINFIZ6uMnxzIvIzA&s=08' icon ={BsTwitter}/>
                    <Footer.Icon href='https://github.com/dashboard' icon ={BsGithub}/>
                    <Footer.Icon href='https://www.linkedin.com/in/divya-ahirwar-198394268' icon ={BsLinkedin}/>
                    <Footer.Icon href='#' icon ={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
