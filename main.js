function mdz_isdom_in_viewport(el, callback = '') {


    var options = {
        root: hex_confs.viewed_elems_root,
        rootMargin: hex_confs.viewed_elems_rootmarg,
        threshold: hex_confs.viewed_elems_threshold,
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
