import projectData from '../pages/data/gallery-data.json';
import ProjectArtworks from "../components/ProjectArtworks.js";
import '../styles/Gallery.css'
import { useLocalization } from '../localization/hooks/useLocalization';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Gallery() {
    const { t, language } = useLocalization();

    const projects = projectData;

    return (
        <div className='gallerybg'>
            <div className='generalbody'>
                <div className='generalbigtitle'>
                    {t("artpage.gallerytitle")}
                </div>
                <div className='generaltitle'>
                    {t("artpage.gallerysubtitle")}
                </div>
                <div className='project-selector'>
                    {projects.map(project => (
                        <section key={project.projectId} className="hero-section">
                            <HashLink className="herolabel" key={project.projectId} to={`#${project.projectId}`}>{project.projectName[language] || project.projectName.en}</HashLink>
                            <div className="hero-thumbnail">
                                {project.heroarts.map((art) => (
                                    <ProjectArtworks key={art.id} art={art} projectId={project.projectId} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
            <div className='project-showcase'>
                {projects.map(project => (
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
                            {project.artworks.map((art) => (
                                <ProjectArtworks key={art.id} art={art} projectId={project.projectId} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}