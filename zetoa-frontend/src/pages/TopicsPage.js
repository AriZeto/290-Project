function TopicsPage() {
    return (
        <>
            <nav className="Article Nav">
            <a href="#about-web-servers">About Web Servers</a>
            <a href="#frontend-design">Frontend Design</a>
            <a href="#optimizing-images">Optimizing Images</a>
            <a href="#cascading-stylesheets">Cascading Stylesheets</a>
            </nav>
            <h2>Web Development Concepts</h2>
            <article id="about-web-servers">
                    <h3>About Web Servers</h3>
                    <p> This webpage was made using Visual Studio on macOS for
                        CS 290 Web
                        Dev class. I set up the file following the directions on
                        the
                        assignment page
                        in Canvas. As far as what 'index' means as it relates to
                        websites
                        and servers: First off, the web client sends an HTTP
                        request to a
                        correct Web Server (presumably, Apache for OSU)
                        determined by
                        appropriate URL or file/pathway. The Web Server will
                        then receive
                        this HTTP request
                        and identifies the document to be requested. Once the
                        specific
                        resource within a File Server is found (index.html –
                        which is this
                        page), the
                        file is sent back through the Web Server and to the Web
                        Browser as
                        an HTTP Response to the browser client. Then, the
                        browser will
                        interpret this 'index.html' document by
                        displaying the contents of it. Do note, our 'index.html'
                        file is
                        located behind a directory and a subdirectory folder
                        when
                        uploaded on
                        the Web Server. However,
                        if our resource were elsewhere, the content would be
                        found by using
                        the appropriate filepath/URL, using the same HTTP
                        Request and HTTP
                        Response methods.</p>

                    <p>Upon opening Chrome, I used the inspect page element,
                        select the
                        'Network' tab, and then refresh the page.
                        When clicking on 'index.html', I am greeted with the
                        following per
                        the HTTP Request:
                        The Request URL (the file pathway that led to this
                        webpage), the
                        Request Method 'GET', and a Status Code of 200 'OK',
                        which indicates
                        that the web page loaded just fine (request successful).
                        Additionally, there are Response Headers as well as
                        Request Headers, which would seem to contain information
                        about the server
                        or webpage.
                        As far as the HTTP Response goes, the content-type of
                        the page
                        includes 'text/html' formatting per the request, as well
                        as the
                        'last modification date'. If we select the 'Response'
                        tab to the right of the
                        'Headers' tab, we could also locate the 'response body',
                        which seems to
                        contain the markup
                        and formatting, essentially the HTML code of the web
                        page that is
                        currently being inspected.</p>

                    <p>Upon getting the ENGR resources and web server
                        content
                        setup, the file was uploaded to the web server and
                        inspected,
                        looking for any differences.
                        It was evident that some changes had been made. Rather
                        than
                        immediately seeing 'index.html', I was greeted
                        with the directories in which 'index.html' would be
                        located
                        ('/~zetoa/a1-zetoa/'),
                        as well as a 'favicon.ico' file, and a 'main.css' and
                        'main.js'
                        file. Let's discuss what the Web Browser inspect tools
                        tell
                        us about the 'index.html' on the Web Server.
                        Under the 'General' Header, the request URL now
                        pointed to the URL that contains the 'index.html' page,
                        rather than the pathway on my local computer. The
                        Request Method
                        remained
                        the same, as well as the Status Code (200, 'OK').
                        However, there was
                        now a 'Remote Address', which is the IP address the
                        Web Server is hosting this content.
                        Furthermore, the Request Headers, as well as the
                        Response Headers
                        contained a variety of more information than what it did
                        on my local
                        computer. For instance, the Web Server version
                        of the Request Headers and Response Headers contains
                        information
                        about the
                        Web Server host and its various metadata. For example,
                        information
                        such as the Web Server type (Apache/2.4.6), Cookies,
                        Host URL, and
                        other
                        content. It's fair to say that file details on the web
                        server
                        contain quite a bit more information than it would
                        on my local computer.</p>


                    <p>Now we should discuss the 'favicon.ico' file:
                        Notice that this is a very small graphic, an 'icon' of
                        the
                        webpage, which is used universally across all documents
                        of the
                        website.
                        The graphic is present in the tab bar. The Status Code
                        is
                        200 'OK', indicating that the request succeeded
                        and that the content loaded for the page. However, we
                        should
                        notice that the 'main.css' and 'main.js' files have a
                        Status
                        Code of 404,
                        which indicate a status of 'Not
                        Found'. This simply means that the Web Server cannot
                        locate
                        the requested resources.</p>

                    <p>The parts of the URL can easily be explained: The schema,
                        or protocol, of our URL
                        is 'https',
                        (followed by '://') which stands for Hypertext Transfer
                        Protocol
                        Secure, an encrypted version of HTTP.
                        This means that the data sent between the web client and
                        web server
                        is encrypted, such that the data transferred over is
                        secure. The
                        subdomain of this URL consists of 'web.engr'. This
                        comes before the main segment of the domain name (say,
                        'oregonstate.edu')
                        and is used typically to create structure and
                        organization to the
                        website.
                        Whereas, the hostname of the URL is
                        'web.engr.oregonstate.edu'. This
                        consists of the subdomain and the main domain name.
                        As far as the resources of this URL, they consist of a
                        few
                        directories, '/~zetoa/a1-zetoa/', which is a directory
                        that leads to another directory (the directory
                        underneath another
                        directory can be called 'subdirectory'). Within this
                        subdirectory,
                        '/a1-zetoa/' contains the desired resource (the one
                        you're reading
                        on this page), 'index.html'.</p>
                </article>

                <article id="frontend-design">
                    <h3>Frontend Design</h3>
                    <p><strong>Frontend design</strong> can be described as the
                        visual
                        theming of a webpage and one that adheres to usability
                        standards.
                        Visual design may consist of (but not limited to):
                        Graphical user interface (GUI), an interface
                        that allows users to visualize and interact
                        with the content on the screen.

                        An interactive experience, such that users can
                        interact with elements on the display.

                        Consistency, how a webpage looks (the web developer
                        should consider a consistent color scheme
                        and typography when designing a webpage).

                        Navigational menu(s), visible to the user
                        such that they can easily access prior
                        pages and locate the page hierarchy that
                        they're on.

                        Furthermore, there are usability standards that
                        should be met to maintain a great frontend design
                        – one that feels natural to the user. The quality
                        experience for a user while navigating a webpage is
                        an absolute priority when considering frontend
                        design.</p>

                    <p><strong>The five "E"s of Usability - </strong></p>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>The effectiveness in which
                            how the web page or application can help the
                            user meet their goals.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>A webpage should be efficient
                            such that a user can perform tasks in the
                            least number of steps required, providing a
                            quick experience.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Users should be able to
                            immediately comprehend how to locate their
                            desired resource(s). This is especially
                            important for first-time users, and so they
                            may remember how to navigate the webpage on
                            their next visit.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Regarding accessibility and
                            availability concerns, developers should
                            learn how users run into their
                            errors – such that they may be replicated, fixed
                            upon, and learned from. Necessary for error
                            prevention.</dd>
                        <dt><strong>Enjoyable/Engaging</strong></dt>
                        <dd>Design your webpage
                            such that it creates an enjoyable, unique
                            experience
                            for the intended audience. Consider the
                            content of the page, the design of the page, and
                            how it reaches that audience.</dd>
                    </dl>

                    <p><strong>Page layout tags</strong> are essential when
                        designing a web
                        application. They provide the structure to the
                        webpage being designed, which in turn helps the
                        readability
                        of the formatted code. Additionally, it makes it
                        such that search engine crawlers can cache and index
                        webpages,
                        as well as segment the flow of content displayed on the
                        page, separated by blocks and new lines
                        before and after elements.
                        Essentially, the page layout tags section off content
                        appropriately for
                        ease of design and can also make and cache optimization
                        processes easier for search engine
                        optimization crawlers.
                        Some examples of page layout tags include (but are not
                        limited to):
                        The &#60;header&#62;, &#60;nav&#62;, &#60;body&#62;,
                        &#60;main&#62;,
                        &#60;div&#62;, &#60;section&#62;, &#60;article&#62;,
                        &#60;aside&#62;,
                        and &#60;footer&#62; tags, each with their appropriate
                        roles
                        for
                        properly displaying content on the page.</p>

                    <p>Links from a page to another are created
                        by the <strong>Anchor</strong> element. Between the
                        opening and closing
                        '&#60;a&#62;&#60;/a&#62;'
                        tags contains a descriptive line of text that is
                        clickable.
                        An attribute, 'href' (within the opening tag), is used
                        to specify the URL the user is taken to. <a
                            href="https://ecampus.oregonstate.edu/online-degrees/undergraduate/computer-science-postbacc/">(Example)
                            Click here to go to the OSU Post-Bacc program
                            homepage.</a>
                        The prior URL is considered an <strong>absolute URL</strong>,
                        as the URL is complete and links to a resource. There
                        exists <strong>relative URL's</strong>, however we have
                        yet to study those.
                        Furthermore, when we open URL's (or the document in our
                        file browser), the webpage will open
                        at the top of the page. Although, if we were to add an
                        '#IDValue' with an appropriate 'IDValue', the page would
                        scroll
                        down to the element that contains that appropriate ID
                        value (the content).</p>
                </article>

                <article id="optimizing-images">
                    <h3>Optimizing images</h3>
                    <p>Optimization of images on a webpage is important, as it
                        reduces the time for a browser to display image files in
                        correct sizes.
                        If the images are not properly optimized, users may
                        be met with waiting long times for photos and
                        graphics to load. Optimized images meet a certain
                        standard. </p>
                    <ol>
                        <li>Their filename must be <strong>descriptive</strong>
                            for SEO's to properly cache the content
                            – that is, their file names should include
                            'who, what, when, and whereas' to be descriptive
                            and
                            concise.</li>
                        <li><strong>Small file sizes</strong> are a
                            priority
                            in order for webpages to load them
                            efficiently,
                            reducing file sizes
                            to as small as possible for the fastest load
                            time. High resolution images should only be served
                            to high resolution hardware.</li>
                        <li><strong>Exact dimensions</strong> should
                            also be
                            considered, cropping and reducing sizes of
                            images such that
                            they fit the resolutions of the webpage to
                            load
                            efficiently. Containing a large image on a webpage
                            will cause the page
                            to load slowly.</li>
                        <li><strong>Correct file formats</strong> are a
                            necessity, whereas specific graphic types
                            (online photos, line-art) have standard file
                            formats.</li>
                        <li><strong>Reduced resolutions</strong> is
                            also
                            a priority, the ability to provide
                            multiple
                            image sizes for
                            each pixel per inch density is becoming
                            a standard. Providing multiple image
                            sizes for a variety of displays is desired. </li>
                        <li>Finally, <strong>Color Mode</strong>, whereas
                            each file format type has its own color
                            mode formatting — RGB for most,
                            but typically moving images (GIF's) user
                            Indexed color mode.</li>
                    </ol>

                    <p>Additionally, the file formats appropriate for
                        photos
                        consist of .JPG, whereas line-art images (such
                        as
                        logos and icons)
                        are typically .GIF, but sometimes are 8-bit
                        .PNG.</p>
                </article>

                <article id="cascading-stylesheets">
                    <h3>Cascading stylesheets</h3>
                    <p>The main reasons to incorporate stylesheets in
                        websites and apps is to modify the structure,
                        content, and the behaviors of
                        the webpage. They make it so that the webpage
                        looks
                        better (the appearance of the webpages), such by
                        improving readability,
                        the legibility of the content, and adhere to the
                        utilization and consistency requirements. Stylesheets
                        essentially make the frontend
                        design
                        of a webpage can look 'prettier' by implementing
                        particular color schemes and typography, it also
                        makes the formatting of
                        a webpage more usable and overall makes the user
                        experience a better one.</p>

                    <p>Additionally, there are <strong>five ways to
                            incorporate styles.</strong> These consist
                        of
                        <strong>Importing</strong> a .CSS file,
                        <strong> embedding</strong> a style within HTML,
                        <strong> Inline</strong> within an element using
                        attributes and values,
                        <strong> Template literals</strong> within
                        JavaScript, and an additional method within
                        regular
                        JavaScript that looks as if they
                        call functions.
                        Finally, the purpose of page layout blocks is to
                        help SEO's and screen readers to comprehend the
                        area
                        of a page and what components
                        they contain. An example of this includes the
                        typical header, main, section, articles, aside,
                        and
                        footer tags. The stylesheet
                        can define specific technicalities of these
                        blocks,
                        such as their background color, text color,
                        borders,
                        and shadows.</p>
                </article>
                </>
                );
                }
                export default TopicsPage;