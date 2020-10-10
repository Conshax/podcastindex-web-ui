import * as React from 'react'

// Components
import Button from '../components/Button'
import PodcastPlayer from '../components/PodcastPlayer'
import StatsCard from './Stats/StatsCard'

import './styles.scss'

interface IProps {}
interface IState {
    loading?: boolean
    recentPodcasts?: Array<any>
}

export default class Landing extends React.Component<IProps, IState> {
    state = {
        loading: true,
        recentPodcasts: [],
    }
    _isMounted = false

    constructor(props: IProps) {
        super(props)
    }

    async componentDidMount(): Promise<void> {
        this._isMounted = true
        const recentPodcasts = (await this.getRecentEpisodes()).items
        if (this._isMounted) {
            this.setState({
                loading: false,
                recentPodcasts,
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    async getRecentEpisodes() {
        let response = await fetch(`/api/recent/episodes?max=7`, {
            credentials: 'same-origin',
            method: 'GET',
        })
        return await response.json()
    }

    render() {
        const { loading, recentPodcasts } = this.state
        return (
            <div className="landing-content">
                <div className="hero-pitch">
                    <div className="hero-pitch-left">
                        <h1 className="hero-pitch-text">
                            Let’s preserve podcasting as a platform for free
                            speech
                        </h1>

                        <div className="hero-pitch-subtitle">
                            We do this by enabling developers to have access to
                            an open, categorized index that will always be
                            available for free, for any use.
                        </div>
                        <h5>
                            Listen to the first episode of "Podcasting 2.0",
                            where we discuss the project, and it's goals.
                        </h5>
                        <div className="listen-row">
                            <audio controls preload="none">
                                <source
                                    src="https://mp3s.nashownotes.com/PC20-01-2020-08-28-Final.mp3"
                                    type="audio/mpeg"
                                />
                            </audio>
                            <a
                                className="subscribe-badge"
                                title="Subscribe"
                                target="_blank"
                                href="http://mp3s.nashownotes.com/pc20rss.xml"
                            >
                                <svg
                                    width="2em"
                                    height="2em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-rss-fill"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5a1 1 0 0 0 0 2 8 8 0 0 1 8 8 1 1 0 1 0 2 0c0-5.523-4.477-10-10-10zm0 4a1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6zm.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="hero-pitch-right">
                        <PodcastPlayer
                            title="Recent Podcasts"
                            loading={loading}
                            podcasts={recentPodcasts}
                        />
                    </div>
                </div>
                <StatsCard />
                <div className="info-section">
                    <h3>Promise</h3>
                    <p>
                        The core, categorized index will always be available for
                        free, for any use.
                    </p>
                    <h3>Operations</h3>
                    <p>
                        Podcast Index LLC is a software developer focused
                        partnership that provides tools and data to anyone who
                        aspires to create new and exciting Podcast experiences
                        without the heavy lifting of indexing, aggregation and
                        data management.
                    </p>
                    <h3>Financing</h3>
                    <p>
                        The core Podcast Index is financed by its founders and
                        stakeholders: Podcasters, Developers and Listeners.
                    </p>
                    <p>
                        Corporate interests and advertising are antithetical to
                        our business.
                    </p>
                    <p>
                        Podcast Index LLC strives to grow by providing enhanced
                        API services of value to developers and organizations.
                    </p>
                    <h3>Mission and Goal</h3>
                    <p>Preserve podcasting as a platform for free speech.</p>
                    <p>
                        Re-tool podcasting to a platform of value exchange that
                        includes developers with podcasters and listeners.
                    </p>
                    <h3>Developer? Join the fun!</h3>
                    <p>
                        Sign up for an account and get API keys at:{' '}
                        <a href="https://api.podcastindex.org/signup">
                            https://api.podcastindex.org
                        </a>
                    </p>
                    <p>
                        API Documentation is{' '}
                        <a
                            target="_blank"
                            href="https://podcastindex-org.github.io/docs-api/"
                        >
                            here
                        </a>
                        .
                    </p>
                    <p>
                        We build in the open. Get active in the{' '}
                        <a href="https://github.com/Podcastindex-org">
                            Github repos
                        </a>
                        .
                    </p>
                    <p>
                        We have a Mastodon server for collaboration. Join it
                        here:{' '}
                        <a href="https://podcastindex.social/invite/hfcQYbjq">
                            Podcastindex.social
                        </a>
                    </p>
                    <p>
                        Follow us on the blog:{' '}
                        <a href="https://blog.podcastindex.org/">
                            blog.podcastindex.org
                        </a>
                        or on{' '}
                        <a href="https://twitter.com/PodcastindexOrg">
                            Twitter
                        </a>
                        , or{' '}
                        <a href="https://noagendasocial.com/@podcastindex">
                            Mastodon
                        </a>
                        .
                    </p>
                    <p>
                        Shoot us an email at:{' '}
                        <a href="mailto:info@podcastindex.org">
                            info@podcastindex.org
                        </a>
                    </p>
                </div>
                <div id="donate" className="info-section">
                    <h3>Help us out...</h3>
                    <p>
                        None of this is free. If you get any value from this
                        project, or if you just believe in it and want to help
                        us out with hosting fees and paying the bills, a
                        donation of any amount would be great.
                    </p>
                    <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_top"
                    >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                            type="hidden"
                            name="hosted_button_id"
                            value="9GEMYSYB7G2DW"
                        />
                        <Button
                            big
                            primary
                            type="submit"
                            alt="Donate with PayPal button"
                        >
                            Donate
                        </Button>
                    </form>
                </div>
                {/* <div className="footer">
                    <a className="social-link">
                        <img
                            height={25}
                            width={25}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mastodon_Logotype_%28Simple%29.svg/223px-Mastodon_Logotype_%28Simple%29.svg.png"
                        />
                    </a>
                    <a href="https://twitter.com/PodcastindexOrg">
                        <img
                            height={25}
                            width={30}
                            src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png"
                        />
                    </a>
                </div> */}
            </div>
        )
    }
}