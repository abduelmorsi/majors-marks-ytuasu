import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useLocation } from 'react-router-dom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { useEffect } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';


function MajorsDetails() {

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const page = parseInt(params.get('page'), 10) || 1;
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { jumpToPage } = pageNavigationPluginInstance;

    useEffect(() => {
        if (page > 1) {
            setTimeout(() => jumpToPage(page - 1), 300);
        }
    }, [page, jumpToPage]);

    return (
        <div style={{ width: '100%', maxWidth: 700, margin: '0.5rem auto' }} >
            <div style={{ height: '80vh', minHeight: 400 }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/assets/majors-guide.pdf"
                        plugins={[pageNavigationPluginInstance]}
                        defaultScale={0.9}
                    />
                </Worker>
            </div>
        </div>
    );
}

export default MajorsDetails;