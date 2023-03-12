import Overview from './components/overview-ch1-3';
import S3 from './components/s3-ch4';
import Home from './components/home';
import Nav from './components/nav';
import EC2 from './components/ec2-ch5';
import EBS from './components/ebs-ch6';
import Databases from './components/databases-ch7';
import VPC from './components/vpc-ch8';
import ROUTE53 from './components/route-53-ch9';
import ELB from './components/elb-ch10';
import MONITORING from './components/monitoring-ch11';
import HAS from './components/h-availability-scaling-ch12';
import DECOUPLING from './components/decoupling-ch13';
import BIGDATA from './components/bigdata-ch14';
import SERVERLESS from './components/severless-architecture-ch15';
import SECURITY from './components/security-ch16';
import AUTOMATION from './components/automation-ch17';
import CACHING from './components/caching-ch-18';
import GOV from './components/goverance-ch19';
import MIGRATION from './components/migration-ch20';
import FEWM from './components/fendwebmobile-ch21';
import MACHLEARNING from './components/mach-learning-ch22';
import MEDIA from './components/media-ch23';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoMatch from './error';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview-ch1-3" element={<Overview />} />
              <Route path="/s3-ch4" element={<S3 />} />
              <Route path="/nav" element={<Nav />} />
              <Route path="/ec2-ch5" element={<EC2 />} />
              <Route path="/ebs-ch6" element={<EBS />} />
              <Route path="/databases-ch7" element={<Databases />} />
              <Route path="/vpc-ch8" element={<VPC />} />

              <Route path="/route-53-ch9" element={<ROUTE53 />} />
              <Route path="/elb-ch10" element={<ELB />} />
              <Route path="/monitoring-ch11" element={<MONITORING />} />
              <Route path="/h-availability-scaling-c12" element={<HAS />} />
              <Route path="/decoupling-ch13" element={<DECOUPLING />} />
              <Route path="/bigdata-ch14" element={<BIGDATA />} />
              <Route path="/severless-architecture-ch15" element={<SERVERLESS />} />

              <Route path="/security-ch16" element={<SECURITY />} />
              <Route path="/automation-ch17" element={<AUTOMATION />} />
              <Route path="/caching-ch18" element={<CACHING />} />
              <Route path="/goverance-c19" element={<GOV />} />
              <Route path="/migration-ch20" element={<MIGRATION />} />
              <Route path="/fendwebmobile-ch21" element={<FEWM />} />
              <Route path="/mach-learning-ch22" element={<MACHLEARNING />} />
              <Route path="/media-ch23" element={<MEDIA />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
      </Router> 
    </div>
  );
}

export default App;
