import type { ProjectId } from '../lib/projects';
type Props = { id: ProjectId; openProject: (id: ProjectId, trigger: HTMLButtonElement) => void };
export default function ProjectVisual({id, openProject}: Props) {
 switch(id) {
case "documents": return (<button className="project-open visual visual-docs" onClick={(event) => openProject("documents", event.currentTarget)} aria-label="Explore Document Management System"><div className="mock-window" aria-hidden="true"><div className="mock-top"><span className="mock-brand">folio<span> / workspace</span></span><span>•••</span></div><div className="mock-body"><div className="mock-sidebar">Overview<br /><b>Documents</b><br />Approvals<br />Settings</div><div className="mock-content"><div className="mock-title">Document library <span>+ New document</span></div><div className="mock-stats"><div>12<small>In review</small></div><div>38<small>Approved</small></div><div>06<small>Revisions</small></div></div><div className="mock-row">Engineering specification <i>In review</i></div><div className="mock-row">Quality control procedure <i className="approved">Approved</i></div><div className="mock-row">Technical drawing register <i className="approved">Approved</i></div></div></div></div><span className="visual-note">WORKFLOW / WEB APPLICATION</span><span className="project-arrow">↗</span></button>);
case "inventory": return (<button className="project-open visual visual-inventory" onClick={(event) => openProject("inventory", event.currentTarget)} aria-label="Explore Inventory Dispatch and Label Printing"><div className="dispatch-mock" aria-hidden="true"><div className="dispatch-header"><span>↗ dispatch</span><span>INVENTORY OPERATIONS</span></div><div className="scan-line"></div><div className="barcode">▌▌▐│▌▌│▐▌│▌▐▌▌│▐</div><div className="scan-caption">SCAN. VERIFY. DISPATCH.</div><div className="dispatch-bottom"><span><small>SCANNER STATUS</small>● Ready to scan</span><span className="label-icon">↗</span></div></div><span className="visual-note">BARCODE / PRINT INTEGRATION</span><span className="project-arrow">↗</span></button>);
case "sign-language": return (
  <button className="project-open visual visual-sign" onClick={event => openProject('sign-language', event.currentTarget)} aria-label="Explore Sign Language to Text">
    <div className="sign-mock" aria-hidden="true">
      <div className="sign-header"><span>sign / text</span><span>LANGUAGE IN MOTION</span></div>
      <div className="sign-workspace">
        <div className="sign-camera"><span className="camera-label">SIGN INPUT</span>
          <svg className="hand-landmarks" viewBox="0 0 160 160" fill="none">
            <path d="M74 139 42 97 28 81 34 70 54 87 47 45 52 36 61 41 68 82 66 22 72 15 79 21 83 81 88 30 95 24 102 31 98 87 111 52 120 49 125 56 112 106 98 136Z" fill="currentColor" opacity=".1" />
            <path d="M74 139 54 87 34 70M74 139 68 82 52 36M74 139 83 81 72 15M74 139 98 87 95 24M74 139 112 106 120 49M54 87 68 82 83 81 98 87 112 106" stroke="currentColor" strokeWidth="1.5" />
            {[ [74,139],[54,87],[34,70],[68,82],[52,36],[83,81],[72,15],[98,87],[95,24],[112,106],[120,49] ].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" />)}
          </svg>
          <span className="camera-corner corner-a" /><span className="camera-corner corner-b" />
        </div>
        <div className="sign-output"><span>TEXT OUTPUT</span><div>A new way<br />to connect<span className="text-caret">|</span></div><small>ILLUSTRATIVE INTERFACE</small></div>
      </div>
      <div className="sign-footer"><span>SIGN LANGUAGE → TEXT</span><span>↗</span></div>
    </div>
    <span className="visual-note">LANGUAGE / WEB APPLICATION</span><span className="project-arrow">↗</span>
  </button>
);
case "dental": return (<button className="project-open visual visual-vision" onClick={(event) => openProject("dental", event.currentTarget)} aria-label="Explore Dental Anomaly Detection"><div className="vision-mock" aria-hidden="true"><div className="vision-header">VISION LAB <span>UNDERGRADUATE THESIS</span></div><div className="detection-area"><span className="crosshair">+</span><div className="detection-box"><span>ANOMALY DETECTION</span><div className="tooth"></div></div><span className="crosshair bottom">+</span></div><div className="vision-bottom"><span>YOLOv8</span><span>RASPBERRY PI 4 ↗</span></div></div><span className="visual-note">COMPUTER VISION / PROTOTYPE</span><span className="project-arrow">↗</span></button>);
 }
}

