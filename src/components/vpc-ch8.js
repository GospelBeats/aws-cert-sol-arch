import vpc from '../assets/vpc.png';
import nat from '../assets/nat.png';

function VPC() {
    return(
        <>
        <h1>VPC</h1>
        <img  src={vpc} height="250px" alt="vpc diagram" />
        <p><strong>CDIR</strong></p>
        <ul>
            <li>10.0.0.0 - usually for business</li>
            <li>172.16.0.0</li>
            <li>192.168.0.0 - usually for home</li>
            <li>10.0.0.0/28 - min 16 ips</li>
            <li>10.0.0.0/16 - max 65,536 ips</li>
            <li>1 subnet per AZ</li>
            <li>Creates ACL, security group, route table by default</li>
        </ul>
        <p><strong>NAT Gateways</strong> - networt access translation</p>
        <img  src={nat} height="250px" alt="nat diagram" />
        <ul>
            <li>enable instances in private network to connect to internet/services</li>
            <li>prevent internet from establishing a connection</li>
            <li>redundant in AZ</li>
            <li>no need to patch</li>
            <li>5 to 45GB scaling</li>
            <li>not with security groups</li>
            <li>auto public ip</li>
        </ul>
        <p><strong></strong></p>
        <p><strong>Security Groups</strong> - virtual firewall, all block by default</p>
        <ul>
            <li>linux ssh port 22</li>
            <li>win rdp port 80</li>
            <li>http web browsing port 443</li>
            <li>https encryption port 3389</li>
            <li>on instance, last line of defense</li>
            <li><strong>Stateful</strong> - all inbound traffic can flow out</li>
            <li>let everything in</li>
        </ul>
        <p><strong>Network ACL</strong></p>
        <ul>
            <li>First line of defense</li>
        </ul>
        </>
    )
}

export default VPC;