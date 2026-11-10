import { homeIntro } from '@/content/home';

/** Supporting line under the home page title. */
export default function HomeIntro() {
  return (
    <div className="flex flex-col items-center gap-6 pb-8 text-center sm:pb-12">
      <p
        className="mx-auto max-w-[640px] text-[18px] leading-[var(--line-body)] min-[600px]:text-[20px]"
        style={{ color: 'var(--color-text)' }}
      >
        {homeIntro.supportingLine}
      </p>
    </div>
  );
}
