window.onscroll = function() {
                    var stickyMenuAgenda = document.getElementById("stickyMenuAgenda");
                    if (window.pageYOffset > window.innerHeight - 50) {
                        stickyMenuAgenda.style.opacity = "1";
                    } else {
                        stickyMenuAgenda.style.opacity = "0";
                    }
                }
                function showSection(sectionId) {
                    var sections = document.querySelectorAll('.content-section');
                    sections.forEach(sec => sec.classList.remove('active'));

                    document.getElementById(sectionId).classList.add('active');

                    var stickyNav = document.getElementById('stickyMenu');
                    if (sectionId === 'home') {
                        stickyNav.style.display = 'none';
                        window.scrollTo(0, 0); // Volta ao topo na Home
                    } else {
                        stickyNav.style.display = 'flex';
                        stickyNav.style.opacity = '1';
                        window.scrollTo(0, 0); // Vai ao topo da nova secção
                    }
                }

                function showAgenda() {
                    showSection('home');
                    
                    setTimeout(() => {
                        const agendaSection = document.getElementById('agenda');
                        agendaSection.scrollIntoView({ behavior: 'smooth' });
                    }, 10);
                }