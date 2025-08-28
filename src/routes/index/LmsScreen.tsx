import { createFileRoute } from '@tanstack/react-router';
import LmsScreenComponent from '@/src/components/LmsScreenComponent';
export const Route = createFileRoute('/index/LmsScreen')({
  component: LmsScreen,
});

function LmsScreen() {
  return (
    <>
      <LmsScreenComponent />
    </>
  );
}
