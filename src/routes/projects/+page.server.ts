import prisma from '$lib/prisma'

export async function load() {
	const projects = await prisma.project.findMany()
	
	return {
		projects
	}
}