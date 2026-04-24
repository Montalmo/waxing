
import SectionHeading from './SectionHeading';

const Gallery = () => {
  const images = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDi2pdY9DE2TveS-BTgujcOQN8qHYmgPGkTEaZzQaiage1XjcLLPPlywjEurIarYI6grcAbhMkl-tqGD2JN-R_q8Eczm7qeA3fBfk6W179UMYiETYGbFInB_X6RHocwCChoEeVkfcadbJQq2DkV5taanEhMS3rQcBxQFmy78zBkE3u4c-yQqrsixvB1Nr81RWcmwyDh-wU__0vVYF-0SXC1lMi_vEFqEBPLsUDtBd6M_gVV_SBuU5fphTIhwvEWAKnM1JYJTtlH74t', aspect: 'aspect-[3/4]', offset: false },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ532VFOWnTOxkv0dM7desPFNoVJRFsBVhrp-Qpdvmfa-tWGVav80aW57adrSdra80dk62_iwPSQFIlqn7hiFW-i-NkfHZTLcPDzEECuAxU5Mqaluny1zltWkVP-nfLv7NDqliwVa0PLdBJ3_7YWNPqpr66dEbIfGJ5z0ODh_3ViBWSBBrm7YrxUsPrcUhJ1nQROIW4s6na3YciwTzlFiJyu6nZZRVTNboMw1Ce-gx0jr4E2gG8OgWebBd42P2oFSRySiWvyN6_5bA', aspect: 'aspect-square', offset: false },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEQmGwluRM4vnwFntsnD3OUMED27lxzmVUkgbBbWZ5f7-TV2xm44SOXEF6BSKbznQ-u9z2RyJ4t05H6bHj5lWtOUAMRw2f4yMypyHqy-7TRL7yN4Dub-QNCZYBGY8vRPSTPHjTqJM50G47DKzpAzr-V_zTWCwwHfoMsKsMYWfnxLFzddRbuL2M-2AzAGDximNYEBtBZ4F2cG0XVFprYKUpY2AJve2Nz0Frs8S0ibpQ6VTly0FjlVBB4r9cv3xgRJ-OQV87U_u1k-CE', aspect: 'aspect-square', offset: true },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIB9tG_hmkOx1WtYtD8MRXF49K5iIUlKM3oDlHJYOXOH-4YYYsQJl8bikiLMi0QYUrh4tv0sznApZSXjGYuqYbUauJiLDVyhiSz6nB0ZyOSDJLEwnAcI6MtrYoC8hQj_MRTWhFWES8wlI_90SKVGrJwV8LtVo7TCvtxxlz5WZR30leOCdwncuq_Af3oh6-iLUPzqS2f6CKzzUVKV_vJN3cH4dMk1qRwOV-xl4qfFt5_G8t6vTQ0cWwv1crnhjSdO6TZrGTL5UW5wDG', aspect: 'aspect-[3/4]', offset: true },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcb8mScyvhQxCaBY0WjZToD0_ryHCythQoTNF3OLdpbhaLtbUPmODY7v-tFUmhl_0Qz1mU6qmmBcuvkr7igOKxziWY7RubJpa-jiFgu8Yp6Ig6oI6dPFQv-bDeM4u0Hktfm8NjyZnJy0R2zfXYs88tc3SQCg-hwT4Hr6MQRaBpY3HUoZUT_UKyKIShjKipvcIYQ9e1Hhi7KxlgZ0vyoD0Say7A0p7VInA8elpzKHV2pSAyfchoLyjb6F9TIAiYtGdBknuDY4vFnKx4', aspect: 'aspect-[3/4]', offset: false },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfeeRErCS62Ac-jrjnb1MdJz6ZQluiYgZJuM_W2W8z2gLUFakrXAbo9i64CxdLxBWZEL8h6LURjQbAVDq_2y-fvjlXX6LrnmBF5EAhJJ-PsamkZ7ea6C4V7lrX68fCxYYY0DjeZnUGPxg_iEpINAufiXOxObrs_KrOYPePErQ2zyS0ZOb0RnHxug90dS3uOF87YXT1N1OEQAUa0n2xARcXPHbj4YYNINyI4OpYlN8c9f4p21qpBL9dvO0cfUkuyhUGQ0O7d44VGxtX', aspect: 'aspect-square', offset: false },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6K1FGHEDOvHBEW3EvaAOfXpUN00ztwUIsxHMYsB_42pkzxdqK2AL4RPjjECP3_w8iq3atKU_IeeUPTYGVearSwwwqvXoUdWYHWwx7SP6IxEPlfjgyZYBoXXAoAzh8SDrRkVtaxrN3L3rgpv5EL954UpIUEMWgOzlApq9N9Nfd5QYgnHvmUc0UC9rdhEMmzv1Grx1yoIDLjIoqX6dMi0ffx1sVoL90PIAf0wBt_hymmcpcuBG5pUKecVqFWTyvOKUnyDDTnGMso_Av', aspect: 'aspect-square', offset: true },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm00A27Kq20wacDr_Lqy1RTffn3VCDk9Sq5R8IoHp0E40x7blxfsdinWJug-HwAbghTvwamGMkDFhkR9pNG8rLVqa1ZVTtFjE13T5LzK0r29LJDjIiK1xlBV90LMMUGvOxE0gMObETh4ctOi4c9HhOCK7dg3WHI_2K5s0PBV_UYM-Bb_ZpXy-E7GQSh1GCfufpqMo0XiHJpjmc3g7CaEjpKHlk9-sXCjZBSlEITuZs5-jWTpI0oO8ULu-wHggcjpaAz-P6sbW14VHc', aspect: 'aspect-[3/4]', offset: true }
  ];

  return (
    <section className="py-xl bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeading className="mb-16">Галерея</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img className="w-full rounded-xl object-cover aspect-[3/4]" src={images[0].src} alt="Gallery 1" />
            <img className="w-full rounded-xl object-cover aspect-square" src={images[1].src} alt="Gallery 2" />
          </div>
          <div className="space-y-4 pt-8">
            <img className="w-full rounded-xl object-cover aspect-square" src={images[2].src} alt="Gallery 3" />
            <img className="w-full rounded-xl object-cover aspect-[3/4]" src={images[3].src} alt="Gallery 4" />
          </div>
          <div className="space-y-4">
            <img className="w-full rounded-xl object-cover aspect-[3/4]" src={images[4].src} alt="Gallery 5" />
            <img className="w-full rounded-xl object-cover aspect-square" src={images[5].src} alt="Gallery 6" />
          </div>
          <div className="space-y-4 pt-12">
            <img className="w-full rounded-xl object-cover aspect-square" src={images[6].src} alt="Gallery 7" />
            <img className="w-full rounded-xl object-cover aspect-[3/4]" src={images[7].src} alt="Gallery 8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
