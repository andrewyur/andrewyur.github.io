<script lang="ts">
    let { pointerEvents } = $props();
</script>

<div style:pointer-events={pointerEvents ? 'none' : 'auto'}>
    <h1>Andrew Yurovchak</h1>
    <h1>Hoboken New Jersey || Nashua New Hampshire</h1>
    <h1><a href="mailto:andy@yurovchak.net">andy@yurovchak.net</a></h1>
    <h1>
        <a
            href="https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2Fandrewyur%2Fresume%2Freleases%2Flatest%2Fdownload%2Fresume.pdf"
            >Resume</a
        >
    </h1>

    <p>
        I am computer science student at Stevens Institute of Technology. I am a
        really quick learner, and talented software engineer. I enjoy desig.
    </p>

    <h2>work experience</h2>
    <h3>Software Engineering Internship - BAE Systems - Summer 2025</h3>
    <p>
        I took ownership of a Fullstack Web UI for a Signals
        Intelligence(sigint) platform, which was built with Vue and Node. During
        my time here, I rewrote the entire codebase from plain javascript &
        commonjs to Typescript & ES6 modules, upgraded the frontend from Vue 2
        to Vue 3, integrated a server framework into the backend, and added a
        build step with Vite that reduced uncached page load time from 10
        seconds to 400 milliseconds. I also added a user interface for the
        signal intelligence platform's file upload system, which involved
        designing a websocket protocol, and making GRPC calls and streaming
        files from the backend to the sigint system. I was also able to make a
        lot of container optimizations: The UI was running accross 3 pods in a
        kubernetes cluster, and I was able to condense them all into one pod and
        only 1 exposed port, using Nginx as a reverse proxy. This reduced the
        combined image size for the UI by 1.1GB, and allowed the user to access
        the UI on their local browser with ssh port forwarding. I was also able
        to reduce the UI's image build time by 98% (6 mins to 5 secs) by
        rewriting the dockerfile to take better advantage of layer caching. I
        had a blast working here, the work I was doing was similar to what i
        would have been doing for fun if I was unemployed, I often found myself
        pulling 11 hour days without meaning to.
    </p>

    <h3>Software Engineering Internship - Jacobs Technology - Summer 2024</h3>
    <p>
        I worked on an agile software development team, and completed feature
        requests and bug fixes across a wide range of .NET based applications.
        The area I was in focused mostly on creating applications that
        compressed navigation data for military aircraft. Most of my time here
        was spent digging through confusing, undocumented code and traversing
        gigantic inheritance trees. I was also able to do some work on an
        internal load testing tool with some other interns, also written in
        .NET. I implemented error handling features which prevented the entire
        4hr+ runtime from going forward if there was an error in the
        configuration.
    </p>

    <h3>
        Head of Risk and Development - Stevens Student Managed Investment Fund -
        Fall 2024
    </h3>
    <p>
        I led a team of 4 developers in maintaining and developing new features
        for the fund's internal website, which provided portfolio information
        and analysis tools to the fund's equity analysts. The website was
        written in React, and used python and flask for the backend. While I was
        there I made a page for the site that showed graphs depicting the fund's
        performance metrics, which involved pulling data from yfinance,
        calculating the fund performance metrics with pandas, and then caching
        the resulting data. I had a great time in this position, I learned a lot
        about managing people and software design analysis.
    </p>

    <h2>projects</h2>
    <h3>
        Reverse engineered photograpy portfolio - <a
            href="https://photos.baetylboy.biz">live link</a
        >
        -
        <a href="https://github.com/andrewyur/photography-portfolio">github</a>
    </h3>
    <p>
        I publish all of my photography onto a shared album on apple photos, and
        I wanted to find a way to display that album on a custom website,
        without having to worry about posting my photography in multiple places.
        I found out that apple photos provides a web viewer for the shared
        album, and so I decided to reverse engineer the front end code, and
        figure out how to call the private API that the apple photos website
        uses, so that I could display the photos on my website without having to
        worry about hosting. I became very familiar with the devtools debugger
        with this project, there was about 4k lines of minified code to dig
        through. I built the website with Svelte, and made a special effort to
        create a site that looks good on mobile and desktop.
    </p>

    <h3>
        Collaborative text editor - <a
            href="https://collab-notepad.baetylboy.biz">live link</a
        >
        -
        <a href="https://github.com/andrewyur/collab_notepad">github</a>
    </h3>
    <p>
        I built a google-docs-style collaborative text editor, that allows
        multiple people to edit a text document in real time, without having to
        worry about edit conflicts. I ended up creating my own version of an
        operational transformation algorithm, which allowed for merging
        divergent document states of any length. This means that clients can
        push changes to the server without pulling them in first or have a
        really slow connection to the server, and still have the same document
        once the dust settles. I wrote this project in elixir, a functional
        programming language that is a sibling of Erlang, famous for its fault
        tolerance features. It was a really unique experience, and it was also
        very interesting to tackle the challenges using a functional programming
        language presented.
    </p>

    <h3>
        QR code image encoder - <a href="https://github.com/andrewyur/qart"
            >github</a
        >
        - <a href="https://crates.io/crates/qart">crates.io</a>
    </h3>
    <p>
        I wrote a rust implementation of the process described in
        <a href="https://research.swtch.com/qart">this article</a>, which
        utilized multithreading and rust's high performance to do it at least
        100 times faster than other implementations. the process of encoding an
        image into a working QR code was really complex, and the article only
        gave vague instructions. I had to piece this together from bits of code
        across repositories, and without any prior understanding of linear
        algebra or of QR codes, it was a significant learning experience.
        Looking back on it, the code is pretty messy and not idiomatic, I am
        certainly better with rust these days...
    </p>

    <h2>other things</h2>
    <p>
        I fence for my college (I got <a
            href="https://docs.google.com/viewer?url=https%3A%2F%2Fusfca.org%2Fwp-admin%2Fadmin-ajax.php%3Fjuwpfisadmin%3Dfalse%26action%3Dwpfd%26task%3Dfile.download%26wpfd_category_id%3D77%26wpfd_file_id%3D42521%26token%3D%26preview%3D1&embedded=true"
            >all american honorable mention</a
        >
        last season), and I enjoy playing pool and video games, listening to music
        and fantasy/sci-fi audiobooks, and
        <a href="https://photos.baetylboy.biz">photography</a> in my free time
    </p>
</div>

<style>
    h1,
    h2,
    h3,
    a {
        font-family: 'MS Gothic', sans-serif;
        color: var(--light);
    }

    p > a,
    p {
        font-family: 'MS PGothic', sans-serif;
        color: var(--light);
    }

    h1 {
        margin: 0.1em 0;
    }

    p {
        line-height: 1.2em;
    }

    h1,
    h1 > a {
        background-color: var(--light);
        color: var(--dark);
        width: fit-content;
    }

    div {
        max-width: 700px;
        position: relative;
        z-index: 1;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 50px;
        padding-bottom: 70px;
    }
</style>
