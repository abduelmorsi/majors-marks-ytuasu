import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useLocation } from 'react-router-dom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { useEffect, useRef, useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

// responsiveness
const viewerContainerStyle = {
    width: '100%',
    // maxWidth: 500,
    margin: '0.5rem auto',
};

const pdfBoxStyle = {
    height: '80vh',
    minHeight: 300,
};

function MajorsDetails() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const page = parseInt(params.get('page'), 10) || 1;
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { jumpToPage } = pageNavigationPluginInstance;
    const hasJumped = useRef(false);

    // Responsive scale state
    const [scale, setScale] = useState(window.innerWidth < 600 ? 0.6 : 1);

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerWidth < 600 ? 0.6 : 1);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset jump flag if page param changes
    useEffect(() => {
        hasJumped.current = false;
    }, [page]);

    return (
        <div style={viewerContainerStyle}>
            <style>
                {`
                @media (max-width: 600px) {
                    .pdf-box {
                        height: 80vh !important;
                        min-height: 180px !important;
                    }
                }
                `}
            </style>
            <div className="pdf-box" style={pdfBoxStyle}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/assets/majors-guide.pdf"
                        plugins={[pageNavigationPluginInstance]}
                        defaultScale={scale}
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