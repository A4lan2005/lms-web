import Chel from '@/src/assests/chel.png';
import Plus from '@/src/assests/plus.png';

const UserCards = () => {
  const userCards = [
    { id: 1, hasUser: true },
    { id: 2, hasUser: true },
    { id: 3, hasUser: true },
    { id: 4, hasUser: true },
    { id: 5, hasUser: true },
    { id: 6, hasUser: false },
  ];
  return (
    <div className="bg-[#F5F8FF]">
      <div className="grid grid-cols-3 justify-items-center gap-x-55 gap-y-6">
        {userCards.map((card) => (
          <div key={card.id} className="h-[150px] w-[190px]">
            {card.hasUser ? (
              <button className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-b from-[#DDE6FF] to-[#668FF9] shadow-sm transition-colors">
                <img src={Chel} alt="user" className="h-30 w-30" />
              </button>
            ) : (
              <button className="flex h-full w-full items-center justify-center rounded-2xl bg-[#AAC2FF] shadow-sm transition-colors">
                <img src={Plus} alt="plus" className="h-10 w-10" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
