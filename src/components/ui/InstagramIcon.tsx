export default function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <img 
      src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
      alt="Instagram" 
      className={className}
      loading="lazy"
    />
  );
}
