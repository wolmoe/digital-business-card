import React from 'react'
import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import GithubIcon from "../images/github-icon.png"

const Footer = () => {
    return (
        <footer className="card-footer">
            <a href=""><img src={TwitterIcon} /></a>
            <a href=""><img src={FacebookIcon} /></a>
            <a href=""><img src={GithubIcon} /></a>
        </footer>
    )
}

export default Footer