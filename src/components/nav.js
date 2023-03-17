import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div>
      <Link to="/">
      <header><h1>AWS Solutions Architect Certification Study Guide</h1></header>
      </Link>
       <button><Link to="overview-ch1-3">Overview Ch.1-3</Link></button>
       <button><Link to="s3-ch4">S3 Ch.4</Link></button>
       <button><Link to="ec2-ch5">EC2 Ch.5</Link></button>
       <button><Link to="ebs-ch6">EBS Ch.6</Link></button>
       <button><Link to="databases-ch7">Databases Ch.7</Link></button>
       <button><Link to="vpc-ch8">VPC-Ch.8</Link></button>
       <button><Link to="route-53-ch9">Route-53 Ch.9</Link></button>
       <button><Link to="elb-ch10">ELB Ch.10</Link></button>
       <button><Link to="monitoring-ch11">Monitoring Ch.11</Link></button>
       <button><Link to="h-availability-scaling-ch12">High Availability Scaling Ch.12</Link></button>
       <button><Link to="decoupling-ch13">Decoupling Ch.13</Link></button>
       <button><Link to="bigdata-ch14">Big Data Ch.14</Link></button>
       <button><Link to="severless-architecture-ch15">Severless Architecture Ch.15</Link></button>
       <button><Link to="security-ch16">Security Ch.16</Link></button>
       <button><Link to="automation-ch17">Automation Ch.17</Link></button>
       <button><Link to="caching-ch18">Caching Ch.18</Link></button>
       <button><Link to="goverance-ch19">Goverance Ch.19</Link></button>
       <button><Link to="migration-ch20">Migration Ch.20</Link></button>
       <button><Link to="fendwebmobile-ch21">FrontEnd Web and Mobile Ch.21</Link></button>
       <button><Link to="mach-learning-ch22">Machine Learning Ch.22</Link></button>
       <button><Link to="media-ch23">Media Ch.23</Link></button>
      </div>
    );
  }
  
  export default Nav;