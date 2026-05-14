window.onscroll = function() {
                    var stickyMenuAgenda = document.getElementById("stickyMenuAgenda");
                    if (window.pageYOffset > window.innerHeight - 50) {
                        stickyMenuAgenda.style.opacity = "1";
                    } else {
                        stickyMenuAgenda.style.opacity = "0";
                    }
                }
                function showSection(sectionId, skipScroll = false) {
                    var sections = document.querySelectorAll('.content-section');
                    sections.forEach(sec => sec.classList.remove('active'));

                    document.getElementById(sectionId).classList.add('active');

                    var stickyNav = document.getElementById('stickyMenu');
                    if (sectionId === 'home') {
                        stickyNav.style.display = 'none';
                    } else {
                        stickyNav.style.display = 'flex';
                        stickyNav.style.opacity = '1';
                    }

                    if (!skipScroll) {
                        window.scrollTo(0, 0);
                    }
                }

                function showAgenda() {
                    const currentSection = document.querySelector('.content-section.active');
                    const isHome = currentSection && currentSection.id === 'home';

                    if (isHome) {
                        // Comportamento original: scroll suave a partir do topo
                        showSection('home');
                        setTimeout(() => {
                            document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' });
                        }, 10);
                    } else {
                        // De outras secções: muda para home sem scroll e salta logo para a agenda
                        showSection('home', true);
                        setTimeout(() => {
                            document.getElementById('agenda').scrollIntoView({ behavior: 'auto' });
                        }, 10);
                    }
                }