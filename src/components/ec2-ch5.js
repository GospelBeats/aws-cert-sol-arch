function EC2() {
    return (
      <>
        <h1>EC2</h1>
        <p><strong>On demand</strong> - pay by hour/sec, short term, flex, no upfront cost, testing the waters, new co.</p>
        <p><strong>Spot</strong> - 90% fluctuate, flex start/stop, middle of night, vaccine</p>
        <p><strong>Reserve</strong> - 72% 1 or 3 yr, (hourly) predicable, aged co., 1 region</p>
        <ul>
          <li><strong>convertible RI</strong> - changes to equal or greater value</li>
          <li><strong>schedule RI</strong> - ex. employees clock in in the morning</li>
        </ul>
        <p><strong>dedicated</strong> - expensive</p>
        <ul>
          <li>compliance</li>
          <li>licensing</li>
          <li>on-demand (hourly)</li>
          <li>reserved 70%</li>
        </ul>
        <p><strong>Launching EC2</strong></p>
        <ul>
          <li>choose AMI - default</li>
          <li>choose instance type T2</li>
          <li>config instance / subnet - AZ</li>
          <li>add storage</li>
          <li>add tags - create data</li>
          <li>config security group</li>
          <li>review and launch</li>
          <li><strong>create security key</strong> - allow you to get into ec2</li>
        </ul>
        <p><strong>ec2 instance connect</strong> - connect to instance</p>
        <p><strong>AWS Cmd</strong> - aws s3 ls</p>
        <p><strong>CMD</strong> - ssh ec2-user@54.226 -i myLondonKP.pem</p>
        <p><code><strong>yum update -y</strong></code> - add security</p>
        <p><strong>IAM role</strong> - role created in IAM that has specific permissions/ multiple users/ temporary/ json
attach role to ec2 instance after its been created</p>
        <p><strong>Roles</strong></p>
        <ul>
          <li>preferred option</li>
          <li>avoid hard-coding credentials</li>
          <li>policies control roles permissions</li>
          <li>update policy attached to role</li>
          <li>attach/detach roles without stopping ec2</li>
        </ul>
        <p><strong>Security Groups</strong> - virtual firewall, block by default
-443,80,22</p>
        <p><strong>Bootstrap Scripts (user data)</strong> - script that runs when instance first runs / allows to automate installation of applications</p>
        <ul>
          <li>enter user data during ec2 set up</li>
        </ul>
        <p><strong>Metadata</strong> - data about data/ec2</p>
        <ul>
          <li>curl http://123.23/meta-data - view commands</li>
          <li>curl http://123.231.123.132/latest/user-data/</li>
        </ul>
        <p><strong>Networking with EC2</strong></p>
        <ul>
          <li><strong>ENI</strong> - Elastic Network Interface, day to day, mgt network, ec2 default</li>
          <li><strong>EN</strong> - Enhanced Networking, single root I/O virtual, high performance</li>
          <li><strong>EFA</strong> - Elastic Fabric Adapter, high performance, machine learning, fastest, OS-bypass - bypass OS</li>
        </ul>
        <p><strong>Ec2 placement groups optimizing</strong> - grouping ec2 instances of the same type</p>
        <ul>
          <li><strong>cluster</strong> - instance 1 AZ, low latency</li>
          <li><strong>partition</strong> - own set of racks, power source, for hw failure network</li>
          <li><strong>spread</strong> - different hardware, ex db and sec db</li>
        </ul>
        <p><strong>Spot Price</strong> - decide max spot price, stop at that amount, 2 min window</p>
        <p><strong>Spot Block</strong> - stop instance from stopping 1-6 hrs</p>
        <p><strong>Spot Fleets</strong> - collection of spot instances, on-demand, you set it, meet your capacity within your budget</p>
        <p><strong>VMware</strong></p>
        <ul>
          <li>hybrid cloud</li>
          <li>cloud migration</li>
          <li>disaster recovery</li>
          <li>dedicated hw</li>
        </ul>
        <p><strong>AWS Outpost</strong> - extending beyond aws</p>
        <ul>
          <li>hybrid cloud</li>
          <li>aws data center/services directly to you to use in your data center</li>
          <li>fully mgt by aws</li>
          <li>dedicated hw</li>
        </ul>
        <p><strong>Outpost rank</strong> - 42u 96 racks, use only in data centers</p>
        <p><strong>Outpost servers</strong> - 1u / 2u, small space req, retail 
stores, factories, healthcare</p>
      </>
    );
  }
  
  export default EC2;