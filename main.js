function mdz_isdom_in_viewport(el, callback = '') {


    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    };

    let observer = new IntersectionObserver((entry, observer) => {

        if (entry[0].isIntersecting) {
            entry[0].target.classList.add("is-in-user-viewport");

            if (callback != '') {
                callback();
            }

        }


    }, options);

    observer.observe(el);

}
