export function LandingPage(): JSX.Element {
    //an empty element is called fragment and lets us return multiple "root" elements.
    return <>
    <section>
        <h2>Your random beer of the day!</h2>
        <article className="random-beer">
            <div className="loader"></div>
        </article>

    </section>
    <footer>
        <button>Generate new random beer</button>
    </footer>

    </>
}
