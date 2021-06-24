import request from '@/utils/request'


const api_name = '/api/hosp/hospital'
export default {
    // ��ѯҽԺ�б�
    getPageList(page, limit, searchObj) {
        return request({
          url: `${api_name}/findHospList/${page}/${limit}`,
          method: 'get',
          params: searchObj
        })
      },
    // ����ҽԺ���Ʋ�ѯfindHospList
    getByHosname(hosname){
        return request({
            url: `${api_name}/findByHosName/${hosname}`,
            methods: `get`
        })
    },
    //����ҽԺ��Ų�ѯҽԺ������Ϣ
    show(hoscode) {
      return request({
          url: `${api_name}/findHospDetail/${hoscode}`,
          method: 'get'
      })
    },
    //����ҽԺ��Ų�ѯ������Ϣ
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    }

}