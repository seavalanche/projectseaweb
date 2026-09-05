import projectSeava from '../pages/data/gallery-data-seava.json';
import projectRea from '../pages/data/gallery-data-rea.json';
import ProjectArtworks from "../components/ProjectArtworks.js";
import '../styles/Gallery.css'
import { useLocalization } from '../localization/hooks/useLocalization';
import React from 'react';
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

import { ReactComponent as SidebarBtnClose } from '../Assets/Common/sidebarbtn-close.svg';
import { ReactComponent as SidebarBtnOpen } from '../Assets/Common/sidebarbtn-open.svg';

export default function Gallery() {
    const { t, language } = useLocalization();

    const projectsSeava = projectSeava;
    const projectsRea = projectRea;

    const [sidebarVisible, setSidebarVisible] = useState(false)
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className='gallerybg'>
            <div className={`gallery-sidebar ${sidebarVisible ? 'is-open' : 'is-closed'}`}>
                {sidebarVisible && (
                    <div className='gallery-sidebar-body'>
                        <div className='generaltitle'>Project Seava</div>
                        <div className="project-selector ontheside">
                            {projectsSeava.map(project => (
                                <section key={project.projectId} className="hero-section ontheside">
                                    <HashLink className="herolabel ontheside" key={project.projectId} to={`#${project.projectId}`}>{project.projectName[language] || project.projectName.en}</HashLink>
                                    <div className="hero-thumbnail ontheside">
                                        {project.heroarts
                                            .filter(art => !art.hidden)
                                            .map((art) => (
                                                <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                            ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                        <span className='dashed-separator-h' />
                        <div className='generaltitle'>Project Rea</div>
                        <div className="project-selector ontheside">
                            {projectsRea.map(project => (
                                <section key={project.projectId} className="hero-section ontheside">
                                    <HashLink className="herolabel ontheside" key={project.projectId} to={`#${project.projectId}`}>{project.projectName[language] || project.projectName.en}</HashLink>
                                    <div className="hero-thumbnail ontheside">
                                        {project.heroarts
                                            .filter(art => !art.hidden)
                                            .map((art) => (
                                                <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                            ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                )}
                <div className={`gallery-sidebar-btn ${sidebarVisible ? 'is-open' : 'is-closed'}`}
                    onClick={() => { toggleSidebar(); }}>
                    {sidebarVisible ?
                        <div className="gallery-sidebar-btn-open"><SidebarBtnClose /></div>
                        :
                        <div className="gallery-sidebar-btn-close"><SidebarBtnOpen /></div>
                    }
                </div>
            </div>
            <div className={`cover ${sidebarVisible ? 'is-open' : 'is-closed'}`} />
            <div className='generalbody'>
                <div className='generalbigtitle'>
                    {t("artpage.gallerytitle")}
                </div>
                <div className='generaltitle'>
                    {t("artpage.gallerysubtitle")}
                </div>
                <span className='dashed-separator-h' />
                <div className='generaltitle'>Project Seava</div>
                <div className='project-selector'>
                    {projectsSeava.map(project => (
                        <section key={project.projectId} className="hero-section">
                            <HashLink className="herolabel" key={project.projectId} to={`#${project.projectId}`}>
                                {project.projectName[language] || project.projectName.en}
                            </HashLink>
                            <div className="hero-thumbnail">
                                {project.heroarts
                                    .filter(art => !art.hidden)
                                    .map((art) => (
                                        <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                    ))}
                            </div>
                        </section>
                    ))}
                </div>
                <span className='dashed-separator-h' />
                <div className='generaltitle'>Project Rea</div>
                <div className='project-selector'>
                    {projectsRea.map(project => (
                        <section key={project.projectId} className="hero-section">
                            <HashLink className="herolabel" key={project.projectId} to={`#${project.projectId}`}>{project.projectName[language] || project.projectName.en}</HashLink>
                            <div className="hero-thumbnail">
                                {project.heroarts
                                    .filter(art => !art.hidden)
                                    .map((art) => (
                                        <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                    ))}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
            <div className='project-showcase'>
                {projectsSeava.map(project => (
                    <section key={project.projectId} id={project.projectId} className="project-section">
                        <h2 className='generaltitle'>{project.projectName[language] || project.projectName.en}</h2>
                        <div className='generalcontent'>{project.projectDescription[language] || project.projectDescription.en}</div>
                        <div className='generaldesc-containerwrapper'>
                            <div className='generaldesc-container'>
                                {project.description.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='label'>{item.label[language] || item.label.en}</div>
                                        <div className='value'>{item.value[language] || item.value.en}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="art-grid">
                            {project.artworks
                                .filter(art => !art.hidden)
                                .map((art) => (
                                    <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                ))}
                        </div>
                    </section>
                ))}
            </div>
            <div className='project-showcase'>
                {projectsRea.map(project => (
                    <section key={project.projectId} id={project.projectId} className="project-section">
                        <h2 className='generaltitle'>{project.projectName[language] || project.projectName.en}</h2>
                        <div className='generalcontent'>{project.projectDescription[language] || project.projectDescription.en}</div>
                        <div className='generaldesc-containerwrapper'>
                            <div className='generaldesc-container'>
                                {project.description.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='label'>{item.label[language] || item.label.en}</div>
                                        <div className='value'>{item.value[language] || item.value.en}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="art-grid">
                            {project.artworks
                                .filter(art => !art.hidden)
                                .map((art) => (
                                    <ProjectArtworks key={art.id} art={art} projectGroup={project.projectGroup} projectId={project.projectId} />
                                ))}
                        </div>
                    </section>
                ))}
            </div>
            <div className="generaldisclaimer generalcontent">{t("artpage.artdisclaimer1")}<br />{t("artpage.artdisclaimer2")}</div>
        </div>
    );
}