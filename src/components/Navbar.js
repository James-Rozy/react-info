export default function Navbar() {
  return (
    <nav>
      <img
        src={require('../images/react-icon-small.png')}
        className='nav--logo'
        alt='React icon small'
      />
      <h3 className='nav--logo-text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  );
}
