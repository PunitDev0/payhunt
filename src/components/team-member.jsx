
  export default function TeamMember({ name, position, bio, image }) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full aspect-square object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-primary font-medium mb-3">{position}</p>
          <p className="text-muted-foreground">{bio}</p>
        </div>
      </div>
    );
  }
  