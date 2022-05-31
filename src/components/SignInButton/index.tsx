import { FaGithub } from 'node_modules/react-icons/fa/index'
import { FiX } from 'node_modules/react-icons/fi/index'

import Styles from './styles.module.scss'

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (

        <button
            type="submit"
            className={Styles.signInButton}
        >
            <FaGithub color="#04d361"/>
            Lucas Honório
            <FiX color="#737380" className={Styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="submit"
            className={Styles.signInButton}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}