// // import { CustomPortableText } from '@/components/global/CustomPortableText';
// // import { Header } from '@/components/global/Header';
// // import ScrollUp from '@/components/global/ScrollUp';
// // import type { PagePayload } from '@/types/sanity';

// // export function Page({ data }: { data: PagePayload }) {
// //   // Default to an empty object to allow previews on non-existent documents
// //   const { body, overview, title } = data || {};

// //   return (
// //     <div>
// //       <div className="mb-14">
// //         {/* Header */}
// //         <Header title={title} description={overview} />

// //         {/* Body */}
// //         {body && (
// //           <CustomPortableText
// //             paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
// //             value={body}
// //           />
// //         )}

// //         {/* Workaround: scroll to top on route change */}
// //         <ScrollUp />
// //       </div>
// //       <div className="absolute left-0 w-screen border-t" />
// //     </div>
// //   );
// // }
import React from 'react';

export const Page = () => {
  return <div>Page</div>;
};
