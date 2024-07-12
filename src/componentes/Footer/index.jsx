import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://discord.gg/RxRMyWjU' target="_blank">
                <img src="/img/discord_mac.png" alt='discord' />
            </a>
            <a href='https://github.com/s3codecL' target="_blank">
                <img src="/img/github_mac.png" alt='Linkedin' />
            </a>
            <a href='https://www.youtube.com/@s3codecL' target="_blank">
                <img src="/img/youtube_mac.png" alt='youtube' />
            </a>
            <a href='https://www.instagram.com/s3codecl/' target="_blank">
                <img src="/img/instagram_mac.png" alt='instagram' />
            </a>            
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>&copy; 2024 By s3codecL</strong>
    </footer>
}

export default Footer