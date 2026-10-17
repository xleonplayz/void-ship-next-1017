export const dynamic='force-dynamic';
export async function GET(){console.info('ship-next health');
return Response.json({ok:true,release:2,service:'notes'})}