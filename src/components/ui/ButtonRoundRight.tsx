const ButtonRoundRight = ({ className = '' }) => {
    return (
        <svg className={`${className ? className : `stroke-white fill-spine-neutral-800`}`} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="-0.5" width="43" height="43" rx="21.5" transform="matrix(1 0 0 -1 0 43)" />
            <path d="M10 21.5L34 21.5L34 22.75L10 22.75L10 21.5ZM33.5165 22.6248C31.5921 22.6754 28.7138 23.1034 26.3403 24.2002C23.9637 25.2984 22.25 26.9807 22.25 29.5L21 29.5C21 26.2693 23.2447 24.2537 25.816 23.0655C28.3905 21.8758 31.4497 21.4287 33.4836 21.3752L33.5165 22.6248ZM33.4836 22.6248C31.4497 22.5713 28.3905 22.1242 25.816 20.9345C23.2447 19.7464 21 17.7307 21 14.5L22.25 14.5C22.25 17.0193 23.9637 18.7016 26.3403 19.7998C28.7138 20.8966 31.5921 21.3246 33.5165 21.3752L33.4836 22.6248Z" />
        </svg>
    )
}

export default ButtonRoundRight