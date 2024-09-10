import React from "react";
import { ProjectsTemplate } from "../ProjectsTemplate";

export function CollabNotepad() {
  return (
    <ProjectsTemplate title="Collab Notepad" date="July 2024">
      <p>
        Collab Notepad is a server for a realtime collaborative text editor
        using my own Operational Transformation algorithm.
      </p>
      <p>
        I used elixir & bandit for the back end, and svelte & quill for the
        front end. It is not really optimized for scale, both because it would
        be hard to load test, and because I do&apos;t really expect it to be
        used frequently. However, I did make use of OTP&apos;s fault tolerance
        features to make sure the server can run without supervison.
      </p>
      <p>
        I have heard a good amount of horror stories about runaway cloud
        computing costs, so I did take some time to make sure that all
        connections have a time out, implementing rate limiting for costly
        services, and making sure that I used a hosting service that scales to
        zero.
      </p>
      <h2>Technical details</h2>
      <p>
        The text resolution algorithm that is used to make sure changes from
        clients don&apos;t result in divergent end states, even in the event of
        slow connections, uses a technology known as Operational Transformation.
        The specific algorithm I used is based off of the one described in this
        paper, and is located in both the server and the client code.
      </p>
      <p>
        The client and server(aka. document process) communicate through
        websocket, with an intermediate process on the server side which acts as
        a message translator, and handler of the websocket connection. The
        process ids of document processes are kept in a registry, linked to
        their document ids, so all a process needs to know to send a message to
        a document process is the document id.
      </p>
      <p>
        The document processes are supervised by a dynamic supervisor, which
        itsself is supervised by the application level supervisor, which also
        tracks the web server and the document process registry.
      </p>
      <h2>My Experience</h2>
      <p>
        I did not want to use pheonix because pheonix has its own version of
        conflict resolution for real time communication (Channels), and it seems
        dumb to learn how to use pheonix to make a web server and to not use
        that part of it. will definitely be using it in the future though.
      </p>
      <p>
        One of the things I wasn&apos;t a huge fan of with Elixir was its lack
        of a built in type checker. Coming from rust&apos;s excellent type
        checker it was a huge change having to keep track of types myself. I
        watched a seminar by one of erlang&apos;s creators, Joe Armstrong, and
        as much as I like and respect him, I think that his opinion on type
        checkers being not necessaary is completely wrong. There is also some
        mutterings of elixir getting a stronger and stricter type system
        sometime in the future, so I am looking forward to that immensely.
      </p>
      <p>
        This was one of the first projects where I had made use of automated
        unit testing. It turned out to be extremely useful in validating my
        functions and in making sure changes didnt break anything. It was a lot
        easier than I thought it would be, but testing the interactions between
        processes was a whole different story...
      </p>
      <p>
        getting this thing dockerized and working on the cloud turned out to be
        a huge pain, because the whole process would crash immediatly upon being
        booted up, because I accidentally used the command that opened the
        elixir shell. There was nothing to indicate this as the reason however,
        and it was a stressful couple of days trying to figure this out. It
        still randomly crashes and reboots, and I am not sure why and do not
        have the means to find out. Thankfully it is not a problem, because it
        happens intermittenly enough that it is not worth worrying about.
      </p>
    </ProjectsTemplate>
  );
}
