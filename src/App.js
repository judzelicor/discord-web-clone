import React from "react"

// This is a temporary import
import { ReactComponent as DiscordLogo } from "./assets/logo/discord.svg"
import { ReactComponent as GithubLogo } from "./assets/logo/github.svg"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="h-screen flex items-center justify-center flex-col">
                    <div className="w-16 mb-7">
                        <DiscordLogo />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Welcome to my Discord Web App Clone!</h1>
                    <div className="flex items-center">
                        <div className="w-5 mr-2">
                            <GithubLogo />
                        </div>
                        <a href="https://github.com/judzelicor" target={ "_blank" }>@judzelicor</a>
                    </div>
                </div>
            </>
        )
    }
}

export default App

