import { useSpring, animated } from 'react-spring';

const Animation = () => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(100px)' },
    config: { tension: 200, friction: 25 },
  });

  return (
    <animated.div style={animationProps} className="w-full min-h-screen">
      
    </animated.div>
  );
};

export default Animation;
