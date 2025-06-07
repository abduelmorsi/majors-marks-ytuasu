import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useLocation } from 'react-router-dom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { useEffect, useRef } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';


function MajorsDetails() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const page = parseInt(params.get('page'), 10) || 1;
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { jumpToPage } = pageNavigationPluginInstance;
    const hasJumped = useRef(false);

    // Reset jump flag if page param changes
    useEffect(() => {
        hasJumped.current = false;
    }, [page]);

    return (
        <div style={{ width: '100%', maxWidth: 500, margin: '0.5rem auto' }}>
            <div style={{ height: '60vh', minHeight: 300 }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/assets/majors-guide.pdf"
                        plugins={[pageNavigationPluginInstance]}
                        defaultScale={0.8}
                        onDocumentLoad={() => {
                            if (!hasJumped.current && page > 1) {
                                jumpToPage(page - 1);
                                hasJumped.current = true;
                            }
                        }}
                    />
                </Worker>
            </div>
        </div>
    );
}

export default MajorsDetails;