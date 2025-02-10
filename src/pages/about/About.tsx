
const About = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Biz haqimizda</h2>
        <p className="text-lg text-gray-600 mb-8">
          Bizning onlayn do'konimizda siz sifatli mahsulotlar va mukammal
          mijozlarga xizmatni topasiz. Har bir mahsulotimiz ehtiyotkorlik bilan
          tanlangan va sizning ehtiyojlaringizga javob berishga mo'ljallangan.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/1581309911/photo/high-angle-view-of-a-warehouse-manager-walking-with-foremen-checking-stock-on-racks.jpg?s=1024x1024&w=is&k=20&c=S4UT8k_x7A8JCkgo9qPITPRrRJrmLwPSbGnDGJ_JI7k="
              alt="Store"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Sifatli Mahsulotlar
            </h3>
            <p className="text-gray-600 mt-2">
              Biz faqat eng yaxshi sifatdagi mahsulotlarni taqdim etamiz,
              shuning uchun mijozlarimiz bizni tanlashadi.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2023/05/30/01/10/empty-room-8027444_640.jpg"
              alt="Support"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Mukammal Xizmat
            </h3>
            <p className="text-gray-600 mt-2">
              Mijozlarimizning ehtiyojlarini qondirish uchun 24/7 xizmat
              ko'rsatish jarayonlarini amalga oshiramiz.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            Bizning Missiyamiz
          </h4>
          <p className="text-lg text-gray-600">
            Bizning missiyamiz har doim sifatli mahsulotlarni mijozlarimizga
            oson va qulay tarzda yetkazib berishdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
